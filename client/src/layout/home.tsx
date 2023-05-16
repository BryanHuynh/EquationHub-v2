import type { AppProps } from "next/app";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${inter.className}`}>
            <div className="h-screen w-screen container mx-auto">
                <div className="p-16 flex flex-row h-full w-full">
                    <div className="basis-5/12 h-full">
                        <div className="flex flex-col w-full">
                            <p className="text-4xl flex-none py-5">
                                Equation Hub
                            </p>
                            <div className="flex flex-col grow gap-y-2 text-navFontUnselected">
                                <Link
                                    href="/home/dashboard"
                                    className="text-xl hover:text-blue-600"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href="/home/gallery"
                                    className="text-xl hover:text-blue-600"
                                >
                                    Gallery
                                </Link>
                                <Link
                                    href="/home/account"
                                    className="text-xl hover:text-blue-600"
                                >
                                    Account
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-lg basis-7/12 w-full bg-white border">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
