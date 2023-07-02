import { get, getById, create, update } from '../helpers/client';
import { User } from '../models/user';

export {
    getUsers,
    getUserById,
    createUser,
    updateUser,
}

const getUsers = async (request, response) => {
    await get('users', 'ORDER BY id ASC', request, response);
}

const getUserById = async (request, response) => {
    const id = parseInt(request.params.id);
    getById('users', id, request, response);
}

const createUser = (request, response) => {
    const user: User[] = request.body;
    create('users', user, request, response);
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const user: User[] = request.body;
    update('users', id, user, request, response);
}

