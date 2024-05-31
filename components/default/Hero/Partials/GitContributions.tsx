// github styled GithubContributions.tsx
import React, { useEffect, Suspense, useState } from "react";
import axios from "axios";
import { url } from "inspector";

const GITHUB_USER = process.env.GITHUB_USER;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITLAB_TOKEN = process.env.GITLAB_TOKEN;
const GITLAB_USER = process.env.GITLAB_USER;

type ContributionDay = {
    color: string;
    contributionCount: number;
    contributionCountGithub?: number;
    contributionCountGitlab?: number;
    date: string;
    weekday: number;
};
type Week = {
    contributionDays: ContributionDay[];
    firstDay: string;
};

type Weeks = Week[];

type GraphQLRes = {
    user: {
        contributionsCollection: {
            contributionCalendar: {
                weeks: Weeks;
            };
        };
    };
};


const GitContributions = () => {

    const [weeks, setWeeks] = useState<Weeks>([]);     
    
    useEffect(() => {
        setWeeks(CreateEmptyWeeks());
        FetchContributions("https://api.github.com/graphql", GITHUB_TOKEN as string).then((incomingWeek) => {
            const orgWeeks = [...incomingWeek];

            for (var i = 0; i < incomingWeek.length; i++) {
                for (var j = 0; j < 7; j++) {
                    if (incomingWeek[i].contributionDays[j].contributionCount > 0) {
                        orgWeeks[i].contributionDays[j].contributionCountGithub = incomingWeek[i].contributionDays[j].contributionCount;
                    }
                }
            }
            setWeeks(orgWeeks);
        });
        FetchContributions("https://gitlab.com/api/graphql", GITLAB_TOKEN as string).then((incomingWeek) => {
            const orgWeeks = [...incomingWeek];

            for (var i = 0; i < incomingWeek.length; i++) {
                for (var j = 0; j < 7; j++) {
                    if (incomingWeek[i].contributionDays[j].contributionCount > 0) {
                        orgWeeks[i].contributionDays[j].contributionCountGitlab = incomingWeek[i].contributionDays[j].contributionCount;
                    }
                }
            }
            setWeeks(orgWeeks);
        }
        );
    }, []);


    return (
        <div className="flex flex-col items-center justify-center">
            <div id="contributions" className="flex gap-1">
                {weeks.map((week, i) => {
                    return (
                        <div key={i} className="relative grid grid-row-7 space-y-1">
                            {week?.contributionDays.map((day, j) => {
                                const isToday = day.date === new Date().toISOString().slice(0, 10);
                                const isGithubMore = day.contributionCountGithub && day.contributionCountGitlab && day.contributionCountGithub > day.contributionCountGitlab;
                                return (
                                    <div key={j} className="relative w-4 h-4 bg-base-200 border border-base-200 shadow"
                                    title={`${day.date} - ${day.contributionCount} contributions`} >
                                        <div
                                            className="absolute w-4 h-4 bg-base-100"
                                        ></div>
                                        <div
                                            className={"absolute w-4 h-4 " + (isToday ? "animate-pulse" : "")}
                                            style={{
                                                backgroundColor: "#2dba4e",
                                                opacity: isToday ? 1 : day.contributionCountGithub ? (day.contributionCountGithub / 3) : 0,
                                            }}
                                        ></div>
                                        <div
                                            className={"absolute w-4 h-4 bg-secondary " + (isToday ? "animate-pulse" : "")}
                                            style={{
                                                opacity: day.contributionCountGitlab ? (day.contributionCountGitlab / 3) : 0,
                                            }}
                                        ></div>


                                    </div>

                                );
                            })}

                        </div>
                    );
                })}
            </div>
        </div>
    );
};

function CreateEmptyWeeks() : Weeks {
    var weeks: Weeks = [];
    for (var i = 0; i < 53; i++) {
        var week: Week = {
            contributionDays: [],
            firstDay: "",
        };
        for (var j = 0; j < 7; j++) {
            week.contributionDays.push({
                color: "#ebedf0",
                contributionCount: 0,
                date: "",
                weekday: 0,
            });
        }
        weeks.push(week);
    }
    return weeks;
}

function FetchContributions(url: string, token: string) : Promise<Weeks> {
    // Add a return statement to ensure the function returns a value
    console.log("token");
    console.log(token);
    return axios
        .post(
            url,
            {
                query: `
                    query {
                        user(login: ` + token + `) {
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
                    `,
            },
            {
                headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`,
                },
            },
        )
        .then((res) => {
            const data: GraphQLRes = res.data.data;

            var weeks = data.user.contributionsCollection.contributionCalendar.weeks as Weeks;

            var lastWeek = weeks[weeks.length - 1];

            var lastWeekDays = lastWeek.contributionDays as ContributionDay[];
            var countOfLastWeek = lastWeekDays.length;
            var missingDays = 7 - countOfLastWeek;

            for (var i = 0; i < missingDays; i++) {
                lastWeekDays.push({
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "",
                    weekday: 0,
                });
            }

            weeks[weeks.length - 1].contributionDays = lastWeekDays;

            return weeks;
        }).then((weeks) => {
            return weeks;
        }
        );
}

export default GitContributions;