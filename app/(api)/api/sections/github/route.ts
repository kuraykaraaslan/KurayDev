"use server";

import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next'
import axiosInstance from '@/libs/http/axios'
import { GraphQLRes } from '@/types/GitTypes'

type ResponseData = {
    message: string
}

export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    //https://api.github.com/graphql

    const url = 'https://api.github.com/graphql'

    const token = process.env.GITHUB_TOKEN;
    const username = process.env.GITHUB_USER as string;

    const query: string = `
    {
        user(login: "${username}") {
            contributionsCollection {
                contributionCalendar {
                    weeks {
                        contributionDays {
                            color
                            contributionCount
                            date
                            weekday
                        }
                        firstDay
                    }
                }
            }
        }
    }
    `
    return axiosInstance.post(url, { query }, {
        headers: {
            Authorization: `bearer ${token}`
        }
    }).then((response) => {
        const data: GraphQLRes = response.data;
        return NextResponse.json({ message: 'Success', data } as ResponseData) 
        
        
        }

    ).catch((error) => {
        return NextResponse.json({ message: 'Error', error }, { status: 500 })
    }

    )

}




