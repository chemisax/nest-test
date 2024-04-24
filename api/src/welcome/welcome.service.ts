import { Injectable } from '@nestjs/common';

@Injectable()
export class WelcomeService {
    greet(): string {
        return 'Welcome to the API, you can get your auth token by making a request to /auth/google';
    }
}
