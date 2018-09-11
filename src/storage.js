/* @flow */

import { uniqueID, getGlobal } from './util';
import { isLocalStorageEnabled } from './dom';

type Getter<T> = <T>(handler : (Object) => T) => T;

type Storage = {
    getState : Getter<*>,
    getID : () => string,
    getSessionState : Getter<*>,
    getSessionID : () => string
};

export function getStorage({ name, version = 'latest', lifetime = (5 * 60 * 1000) } : { name : string, version? : string, lifetime? : number }) : Storage {

    const STORAGE_KEY = `__${ name }_${ version }_storage__`;

    let accessedStorage;

    function getState<T>(handler : (storage : Object) => T) : T {

        let localStorageEnabled = isLocalStorageEnabled();
        let storage;

        if (accessedStorage) {
            storage = accessedStorage;
        }

        if (!storage && localStorageEnabled) {
            let rawStorage = window.localStorage.getItem(STORAGE_KEY);

            if (rawStorage) {
                storage = JSON.parse(rawStorage);
            }
        }

        if (!storage) {
            storage = getGlobal()[STORAGE_KEY];
        }

        if (!storage) {
            storage = {
                id: uniqueID()
            };
        }

        if (!storage.id) {
            storage.id = uniqueID();
        }

        accessedStorage = storage;

        let result = handler(storage);

        if (localStorageEnabled) {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
        } else {
            getGlobal()[STORAGE_KEY] = storage;
        }

        accessedStorage = null;

        return result;
    }

    function getID() : string {
        return getState(storage => storage.id);
    }

    function getSession<T>(handler : (state : Object) => T) : T {
        return getState(storage => {

            let session = storage.__session__;
            let now = Date.now();

            if (session && ((now - session.created) > lifetime)) {
                session = null;
            }

            if (!session) {
                session = {
                    guid:    uniqueID(),
                    created: now
                };
            }

            storage.__session__ = session;

            return handler(session);
        });
    }

    function getSessionState<T>(handler : (state : Object) => T) : T {
        return getSession(session => {
            session.state = session.state || {};
            return handler(session.state);
        });
    }

    function getSessionID() : string {
        return getSession(session => session.guid);
    }

    return {
        getState,
        getID,
        getSessionState,
        getSessionID
    };
}
