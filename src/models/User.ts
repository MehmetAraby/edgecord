import Client from '@/client/Client';

class User {
    public username: string;
    public id: string;
    public discriminator: string;
    public displayName: string;
    public bot: boolean;
    public avatar: string;
    public flags: number;
    public constructor(client: Client, data: any) {
        this.username = data.username;
        this.id = data.id;
        this.discriminator = data.discriminator;
        this.displayName = data.global_name;
        this.bot = data.bot ?? false;
        this.avatar = data.avatar;
        this.flags = data.flags;
    }

    public get tag() {
        return `${this.bot ? `${this.username}#${this.discriminator}` : this.displayName}`
    }
}

export default User;