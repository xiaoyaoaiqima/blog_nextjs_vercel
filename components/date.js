import { parseISO, format, isValid } from 'date-fns';

export default function Date({ dateString }) {
  // 处理 null 或空值
  if (!dateString) {
    return <span>无日期</span>;
  }

  const date = parseISO(dateString);

  // 处理无效日期
  if (!isValid(date)) {
    return <span>无日期</span>;
  }

  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
