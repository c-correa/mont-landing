import Link from 'next/link'
import React from 'react'
import { Instagram, Facebook, Twitter } from 'lucide-react';


const Footer = () => {
    return (
        <div className="w-full border-t border-gray-200 dark:border-gray-800 py-6">
            <div className='flex py-10 px-20 justify-between'>
                <div className='flex w-full gap-40'>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/">Contact</Link>
                        </li>
                        <li>
                            <Link href="/">Privacy Policy</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href="/">Terms of Service</Link>
                        </li>
                        <li>
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex w-full gap-10 flex-col'>
                    <div>
                        <ul>
                            <li>
                                <p>+57 (310) 222-2222</p>
                            </li>
                            <li>
                                <p>info@example.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className='flex gap-4'>
                        <ul className='flex gap-4'>
                            <li>
                                <Instagram />
                            </li>
                            <li>
                                <Facebook />
                            </li>
                            <li>
                                <Twitter />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer