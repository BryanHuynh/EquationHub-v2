import type { AppProps } from "next/app";
import Link from "next/link";


export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto py-10 h-screen">
            <div className="h-full w-full">
                <div className="flex flex-row gap-4 w-full h-full">
                    <div className="basis-1/5">
                        <div className="flex flex-col">
                            <p className="text-4xl flex-none py-5">
                                Equation Hub
                            </p>
                            <div className="flex flex-col grow gap-y-2 text-navFontUnselected">
                                <Link
                                    href="/home/dashboard"
                                    className="text-2xl hover:text-blue-600"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href="/home/gallery"
                                    className="text-2xl hover:text-blue-600"
                                >
                                    Gallery
                                </Link>
                                <Link
                                    href="/home/account"
                                    className="text-2xl hover:text-blue-600"
                                >
                                    Account
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-lg basis-4/5 bg-white border w-full h-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
