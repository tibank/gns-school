import axios from 'axios';
import { ICourse } from '../models/ICourse';

interface IResponseCourses {
    courses: ICourse[];
}

interface IResponseCourse {
    course: ICourse;
}

interface IToken {
    token: string;
}

export class CourcesService {
    static async getApiToken(): Promise<string> {
        const url: string = process.env.REACT_APP_BASEURL + 'auth/anonymous?platform=subscriptions';

        if (localStorage.getItem('ApiToken')) {
            return localStorage.getItem('ApiToken') as string;
        }

        const response = await axios.get<IToken>(url);
        if (response.data) {
            localStorage.setItem('ApiToken', response.data.token);
        }

        return response.data.token;
    }

    static async findAll() {
        const token: string = await CourcesService.getApiToken()
        const url: string = process.env.REACT_APP_BASEURL + 'core/preview-courses';

        return await axios.get<IResponseCourses>(url, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json; charset=utf-8',
            },
        });
    }
}
