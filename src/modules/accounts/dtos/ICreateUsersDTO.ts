interface ICreateUsersDTO {
    name: string;
    password: string;
    email: string;
    driver_license: string;
    id?: number;
    avatar?: string
}

export { ICreateUsersDTO }