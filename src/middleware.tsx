import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse, NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
/*   const userCookie = request.cookies.get('user')?.value;
  const pathname = request.nextUrl.pathname;
  const protectedPaths = ['/profile' , "/history" , "/prediction-game" , "/support"]; */

  // Remove the locale prefix from the pathname if it exists
/*   const locales = routing.locales; // e.g. ['en', 'ar']
  const localePattern = new RegExp(`^/(${locales.join('|')})(/|$)`);
  const cleanPathname = pathname.replace(localePattern, '/'); */

/*   console.log('Original pathname:', pathname);
  console.log('Clean pathname:', cleanPathname); */

  let user;
  /* try {
    user = userCookie ? JSON.parse(userCookie) : null;
  } catch (error) {
    console.error('Error parsing user cookie:', error);
    user = null;
  } */

  // Protect /profile routes
 /*  if (protectedPaths.some((path) => cleanPathname.startsWith(path))) {
    console.log('In protected route');
    if (!user) {
      console.log('Redirecting to /login due to missing token');
      return NextResponse.redirect(new URL('/login', request.url));
    }
  } */

  // Let next-intl handle locale routing / rewrites
  const response = intlMiddleware(request);
  return response;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
