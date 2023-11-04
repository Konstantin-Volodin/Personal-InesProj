"use client"

import { createContext, useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "firebaseConfig";

// LAYOUT OBJECT STRUCTURE
export interface socialMedia {
    type: string,
    href: string
}

export interface layout {
    Homepage: {
        images: { home: string, support: string, impact: string },
        PersonCards: string[],
        StatsCards: string[]
    },
    Support: {
        images: { home: string, support: string }
    },
    Footer: {
        email: string,
        links: socialMedia[]
    }
}

const defaultLayout: layout = {
    Homepage: {
        PersonCards: [],
        StatsCards: [],
        images: { home: "", support: "", impact: "" }
    },
    Support: {
        images: { home: "", support: "" }
    },
    Footer: {
        email: "",
        links: [
            { type: 'instagram', href: '' }
        ]
    }
}

// TRANSLATION OBJECT STRUCTURE
export interface languages {
    list: string[],
    translation: { [identifier: string]: string }
}

export interface translation {
    Header: {
        brand: string,
        homepage: string
        support: string
    },
    Footer: {
        logo: { title: string, description: string },
        site_map: { title: string, pages: pageLink[] },
        connect: { title: string, email: string }
    },
    Homepage: {
        intro: { title: string, description: string },
        impact: { title: string, cards: { [identifier: string]: statCard } },
        about: { title: string, cards: { [identifier: string]: personCard } },
        support: { title: string, description: string }
    },
    Support: {
        intro: { title: string, description: string },
        support: { title: string, description: string }
    }
}

export interface statCard {
    stat: string,
    text: string,
    img: string
}

export interface personCard {
    full_name: string,
    position: string,
    description: string,
    img: string
}

export interface pageLink {
    description: string,
    link: string
}

const defaultLanguages: languages = {
    list: ['en'],
    translation: { 'en': 'English [EN]' }
}

const defaultTranslations: translation = {
    Header: { brand: 'brand', homepage: 'homepage', support: 'support', },
    Footer: {
        logo: { title: 'title', description: 'description' },
        site_map: {
            title: 'title', pages: [
                { description: "homepage", link: "/" },
                { description: "support", link: "/support/" }
            ]
        },
        connect: { title: 'title', email: 'email' }
    },
    Homepage: {
        intro: { title: 'title', description: 'description' },
        impact: { title: 'title', cards: {} },
        about: { title: 'title', cards: {} },
        support: { title: 'title', description: 'description' }
    },
    Support: {
        intro: { title: "title", description: "description" },
        support: { title: "title", description: "description" }
    }
}


export const CMSContext = createContext({
    locale: "en",
    langs: defaultLanguages,
    raw: defaultTranslations,
    layout: defaultLayout,
    done: false
})

export function CMSProvider({ children, locale }: any) {

    // Prepare Data
    let [lang, setLang] = useState(defaultLanguages)
    let [raw, setRaw] = useState(defaultTranslations)
    let [lay, setLay] = useState(defaultLayout)
    let [done, setDone] = useState(false)

    // Loads CMS data
    useEffect(() => {
        async function fetchData() {

            let langSnap = await getDoc(doc(db, 'layout', 'languages'))
            if (langSnap.exists()) {
                let langDat: any = await langSnap.data()
                setLang(langDat)
            }

            let trSnap = await getDoc(doc(db, 'layout', locale))
            if (trSnap.exists()) {
                let trDat: any = (await trSnap.data())
                setRaw(trDat)
            }


            let laySnap = await getDoc(doc(db, 'layout', 'layout'))
            if (laySnap.exists()) {
                let layDat: any = (await laySnap.data())
                setLay(layDat)
            }
        }
        fetchData().then(() => setDone(true))
    }, [])


    return (
        <CMSContext.Provider value={{ locale: locale, langs: lang, raw: raw, layout: lay, done: done }}>
            {children}
        </CMSContext.Provider>
    )
}