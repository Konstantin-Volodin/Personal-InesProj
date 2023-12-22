'use client';

import Link from 'next/link'
import { useContext, useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { store } from 'firebaseConfig';
import { CMSContext, pageLink } from 'app/CMSProvider';
import { socialMedia } from 'app/CMSProvider';
import ClickableText from './ClickableText';

export default function Footer() {
    const { locale, raw, done, layout } = useContext(CMSContext);

    // Loads Image
    const [brandImg, SetBrandImg] = useState("")
    useEffect(() => {
        const fetchImage = async function () {
            const globalImage = ref(store, "LayoutImages")
            getDownloadURL(ref(globalImage, layout.BrandImage)).then(url => SetBrandImg(url))
        }

        if (done) { fetchImage() }
    }, [done])

    return (
        <main>
            {done && (
                <div className=' w-full bg-slate-50 p-10 border-t-2 border-slate-700 flex flex-col sm:flex-col md:flex-row gap-x-6 gap-y-16 text-slate-900 text-center tracking-[0.35em] uppercase'>


                    {/* LOGO COLUMN */}
                    <div className='cursor-default basis-1/3 flex flex-col gap-y-6'>
                        <header className=' font-semibold text-2xl'>{raw.Footer.logo.title}</header>
                        {/* <div className='font-light'>{raw.Footer.logo.description}</div> */}
                        <div><img src={brandImg} className='h-20 mx-auto' /></div>
                    </div>


                    {/* SITE MAP */}
                    <div className='basis-1/3 flex flex-col gap-y-6'>
                        <header className='cursor-default font-semibold text-2xl'>{raw.Footer.site_map.title}</header>
                        {raw.Footer.site_map.pages.map((itm: pageLink) => {
                            return (
                                <Link key={itm.description} href={"/" + locale + itm.link} className='transition-all tracking-wide font-light hover:font-normal hover:scale-110'>{itm.description}</Link>
                            )
                        })}
                    </div>


                    {/* CONNECT */}
                    <div className='basis-1/3 flex flex-col gap-y-6'>
                        <header className='cursor-default font-semibold text-2xl'>{raw.Footer.connect.title}</header>
                        <div className='mx-auto flex flex-row gap-x-3'>

                            <a href="https://www.facebook.com/GarzadelSol/" target="_blank" role="button" className='hover:scale-110 transition-all'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" style={{ "color": "#1877f2" }} viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>

                            <a href="https://www.instagram.com/inesazofeifa/" target="_blank" role="button" className='hover:scale-110 transition-all'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" style={{ "color": "#c13584" }} viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                            <a href="https://salvemonos.org/" target="_blank" role="button" className='hover:scale-110 transition-all'>
                                <svg className='h-10 w-10' viewBox="0 0 254 410" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M253 200C261 56 183 6.66667 143 0C117.13 0 106.921 6.69259 97.0665 13.1523C87.8752 19.1774 78.9931 25 58 25C14.5 25 0 64.5 0 83C0 156.5 42 192.5 46 192.5C46 212.07 47.244 230.223 49.4753 247H50.0272C50.108 248.55 50.3671 250.376 50.7919 252.364C53.2636 263.936 61.3432 281 72.5 281C74.8403 281 72.6256 268.352 70.6356 256.988C69.7224 251.773 68.8565 246.828 68.5 243.5L68.3033 243.527C70.7697 219.679 87.8407 210 103.427 210C134.125 210 139.151 231.08 142.316 244.356C142.616 245.614 142.899 246.802 143.186 247.895C143.584 246.377 143.939 244.677 144.319 242.86C147.1 229.557 151.187 210 182.945 210C219.04 210 253.536 255 143.186 390C133.025 377.954 124.093 366.624 116.275 355.98L116.5 356C115.854 355.239 115.203 354.442 114.548 353.614C114.4 353.409 114.251 353.204 114.103 353H114.066C109.426 347.047 104.585 339.599 99.9048 332.399C91.0352 318.754 82.7447 306 77.5 306C67.2917 306 67.3683 319.012 73.9172 334C76.9612 340.967 83.5 353 83.5 353L83.7358 353.021C103.466 386.723 126.811 405.143 143 410C176.333 400 245 344 253 200ZM52.604 103C36.8532 103 17.8663 123 71.2387 183C122.958 123 106.79 103 89.8734 103C74.9889 103 73.073 111.692 71.7698 117.605L71.7697 117.605L71.7696 117.605L71.7695 117.606C71.5916 118.413 71.4252 119.168 71.2387 119.842C71.1044 119.357 70.9718 118.829 70.8314 118.271L70.8311 118.27L70.8311 118.27L70.831 118.27C69.3474 112.369 66.9918 103 52.604 103Z" fill="black" />
                                </svg>


                            </a>


                            {/* {layout.Footer.links.map((itm: socialMedia) => {
                                if (itm.type === 'facebook') {
                                    return ()
                                }
                                else if (itm.type === 'instagram') {
                                    return (<a key={itm.type} href={itm.href} role="button" className='hover:scale-110 transition-all'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" style={{ "color": "#c13584" }} viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>)
                                }
                                else if (itm.type === 'twitter') {
                                    return (<a key={itm.type} href={itm.href} role="button" className='hover:scale-110 transition-all'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" style={{ "color": "#1da1f2" }} viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>)
                                }
                            })} */}

                        </div>
                        <div className='flex flex-col gap-y-2 cursor-pointer place-items-center'>
                            <ClickableText text={layout.Footer.email}></ClickableText>
                            <ClickableText text={layout.Footer.phone}></ClickableText>
                        </div>
                    </div>
                </div>
            )}
        </main >
    )
}
