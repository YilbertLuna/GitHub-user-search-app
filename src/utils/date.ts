import dayjs from "dayjs";

export function dateCreated(DATE: string | undefined): string {
    const date = dayjs(DATE)

    const formate = `Joined ${date.format("DD/MM/YYYY")}`

    return formate
}