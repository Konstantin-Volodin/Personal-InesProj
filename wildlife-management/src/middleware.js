import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['es', 'en'],
    defaultLocale: 'en',
    localePrefix: 'always'
});

export const config = {
    // Skip all paths that should not be internationalized. This example skips
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};