import dayjs from 'dayjs'

/**
 * 日期时间格式化
 * @param {number | undefined} time 日期时间 (ms)
 * @param {string} format 格式化形式
 * */
export const formatDate = (time?: number, format: string = 'YYYY-MM-DD HH:mm:ss') => time ? dayjs(time).format(format) : '-';
