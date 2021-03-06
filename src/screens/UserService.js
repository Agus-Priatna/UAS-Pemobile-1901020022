import { REQUEST_HEADER } from "../constants";

const listUser = async () => {
    const resp = await fetch('https://gorest.co.in/public/v2/users');
    return await resp.json();
}

const createUser = async (payload) => {
    const resp = await fetch('https://gorest.co.in/public/v2/users', {
        method: 'POST',
        headers: REQUEST_HEADER,
        body: JSON.stringify(payload)
    });
    return await resp.json();
}

const editUser = async (payload) => {
    const resp = await fetch(`https://gorest.co.in/public/v2/users/${payload.id}`, {
        method: 'PATCH',
        headers: REQUEST_HEADER,
        body: JSON.stringify(payload)
    });
    return await resp.json();
}

const removeUser = async (id) => {
    const resp = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
        method: 'DELETE',
        headers: REQUEST_HEADER,
    });
    return await resp.json();
}

export { listUser, createUser, editUser, removeUser }