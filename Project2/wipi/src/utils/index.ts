
/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
function pluralize(time: number, label: string) {
    if (time === 1) {
      return time + label
    }
    return time + label
}

/**
 * @param {number} time
 */
export function timeAgo(time: number) {
    const between = Date.now() / 1000 - Number(time) / 1000
    if (between < 3600) {
        return pluralize(~~(between / 60), '分钟')
    } else if (between < 86400) {
        return pluralize(~~(between / 3600), '小时')
    } else if (between < 2073600) {
        return pluralize(~~(between / 86400), '天')
    } else if (between < 62208000) {
        return pluralize(~~(between / 2073600), '月')
    } else {
        return pluralize(~~(between / 62208000), '年')

    }
}