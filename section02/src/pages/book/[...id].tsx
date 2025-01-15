import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  // [...id] => catch all segment  -> /book/3/3/3 등의 경로 가능 but /book 불가
  // [[...id]] => /book도 가능 => optional catch all segment
  return <h1>book</h1>;
}
