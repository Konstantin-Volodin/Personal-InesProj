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
        StatsCards: string[],
        ProjectCards: string[]
    },
    BrandImage: string,
    Support: { images: { home: string, support: string } },
    Footer: { email: string, phone: string, links: socialMedia[] }
}

const defaultLayout: layout = {
    Homepage: {
        PersonCards: [],
        StatsCards: [],
        ProjectCards: [],
        images: { home: "", support: "", impact: "" }
    },
    BrandImage: "",
    Support: { images: { home: "", support: "" } },
    Footer: { email: "", phone: "", links: [{ type: 'instagram', href: '' }] }
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
        connect: { title: string }
    },
    Homepage: {
        intro: { title: string, description: string },
        impact: { title: string, cards: { [identifier: string]: statCard } },
        about: { title: string, cards: { [identifier: string]: personCard } },
        projects: { title: string, cards: { [identifier: string]: projectCard } },
        support: { title: string, description: string, button: string }
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
    img: string,
    link: string
}

export interface projectCard {
    name: string,
    description: string,
    img: string,
    link: string
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
        connect: { title: 'title' }
    },
    Homepage: {
        intro: { title: 'title', description: 'description' },
        impact: { title: 'title', cards: {} },
        about: { title: 'title', cards: {} },
        projects: { title: 'title', cards: {} },
        support: { title: 'title', description: 'description', button: 'button' }
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