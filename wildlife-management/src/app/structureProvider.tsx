"use client"

import { createContext, useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "firebaseConfig";

interface statCard {
    stat: string,
    text: string,
    img: string
}

interface personCard {
    full_name: string,
    position: string,
    description: string,
    img: string
}

interface langDesc {
    key: string,
    value: string
}

interface translations {
    Header: {
        brand: string,
        homepage: string
        support: string
    },
    LangSwitcher: { [identifier: string]: string }
    Footer: {
        logo: { title: string, description: string },
        site_map: { title: string, page1: string, page2: string },
        connect: { title: string, email: string }
    },
    Homepage: {
        intro: { title: string, description: string },
        impact: { title: string, cards: { [identifier: string]: statCard } },
        about: { title: string, cards: { [identifier: string]: personCard } },
        support: { title: string, description: string }
    }
}

const defaultTranslations: translations = {
    Header: { brand: 'brand', homepage: 'homepage', support: 'support', },
    Footer: {
        logo: { title: 'title', description: 'description' },
        site_map: { title: 'title', page1: 'page1', page2: 'page2' },
        connect: { title: 'title', email: 'email' }
    },
    LangSwitcher: {},
    Homepage: {
        intro: { title: 'title', description: 'description' },
        impact: { title: 'title', cards: {} },
        about: { title: 'title', cards: {} },
        support: { title: 'title', description: 'description' }
    }
}



export const CMSContext = createContext({
    locale: "",
    languages: [],
    raw: defaultTranslations,
    done: false
})

export function CMSProvider({ children, locale }: any) {

    // Prepare Data
    let [languages, setLanguages] = useState([])
    let [raw, setRaw] = useState(defaultTranslations)
    let [done, setDone] = useState(false)

    // Loads CMS data
    useEffect(() => {
        async function fetchData() {
            let langSnap = await getDoc(doc(db, 'localization', 'languages'))
            if (langSnap.exists()) {
                let langDat = await langSnap.data()['lang_list']
                setLanguages(langDat)
            }

            let trSnap = await getDoc(doc(db, 'localization', locale))
            if (trSnap.exists()) {
                let trDat: any = (await trSnap.data())
                setRaw(trDat)
            }
        }
        fetchData().then(() => setDone(true))
    }, [])


    return (
        <CMSContext.Provider value={{ locale: locale, languages: languages, raw: raw, done: done }}>
            {children}
        </CMSContext.Provider>
    )
}