export interface List<Type> {
    data: Type[];
    total: number;
    page: number;
    limit: number;
}

export interface UserPreview
// User as a part of list or other data like post / comment.
{
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
}

export interface CreateUserModel {
    firstName: string;
    lastName: string;
    email: string;
}

export interface UserFull
// Full user data returned by id.
{
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    dateOfBirth: string;
    registerDate: string;
    phone: string;
    picture: string;
    location: any;
}