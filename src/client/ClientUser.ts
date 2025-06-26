import User from '@/models/User';
import Client from './Client';

class ClientUser extends User {
    /**
     * Whether or not this account has been verified
     *
     * @type {boolean}
     */
    public verified: boolean;

    /**
     * If the bot's owner has MFA enabled on their account
     * @type {?boolean}
     */
    public mfaEnabled : boolean | null;

    public constructor(client: Client, data: any) {
        super(client, data);
        this.verified = data.verified;
        this.mfaEnabled  = typeof data.mfa_enabled === 'boolean' ? data.mfa_enabled : null;
    }
}

export default ClientUser;