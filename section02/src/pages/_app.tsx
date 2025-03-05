import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push('/test'); // .replace => 뒤로가기 방지, .back => 뒤로가기
  };

  useEffect(() => {
    router.prefetch('/test');
  }, []);

  return (
    <>
      <header>
        <Link href={'/'}>index</Link>
        &nbsp;
        <Link href={'/search'} prefetch={false}>
          search
        </Link>
        &nbsp;
        <Link href={'/book/1'}>book1</Link>
        <div>
          <button onClick={onClickButton}>/test페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />;
    </>
  );
}
