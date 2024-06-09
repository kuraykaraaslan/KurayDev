"use server";

import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

import  { ContributionDay, Week, Weeks, GraphQLRes } from "@/types/GitTypes";

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
    return axios.post(url, { query }, {
        headers: {
            Authorization: `bearer ${token}`
        }
    }).then((response) => {
        var data: GraphQLRes = response.data.data;
        
        const weeks = data.user.contributionsCollection.contributionCalendar.weeks as Week[];
        const last = weeks.length - 1;

        const days = weeks[last].contributionDays as ContributionDay[];
        const count = days.length;

        //complete the week to 7 days
        const missing = 7 - count;
        for (let i = 0; i < missing; i++) {
            days.push({ color: "#ebedf0", contributionCount: 0, date: "0", weekday: count + i });
        }

        //update the week
        weeks[last].contributionDays = days;

        data.user.contributionsCollection.contributionCalendar.weeks = weeks;       


        return NextResponse.json(data, { status: 200 });
        
        
        }

    ).catch((error) => {
        return NextResponse.json({ message: 'Error', error }, { status: 500 })
    }

    )

}




