export const makeKstYmd = (date: Date) => {
    const ymd = new Intl.DateTimeFormat("fr-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: "Asia/Seoul",
    }).format(date)

    return ymd
}
