import React from "react";

import styles from './register.new.account.module.scss'
import { Input } from "shared-components";

export const RegisterNewAccount = () => {
    return (<div className={styles.registerAccount}>
        <form className={styles.form}>
            <div className={styles.formTop}>
                <label>Opšte informacije</label>
                <div className={styles.formGrid}>
                    <Input id='vaseIme' type='text' name='vaseIme' placeholder='Unesite Vaše ime*' />
                    <Input id='vasePrezime' type='text' name='vasePrezime' placeholder='Unesite Vaše prezime*' />
                    <Input id='vasEmail' type='email' name='vasEmail' placeholder='Unesite Vaš E-mail*'/>
                    <Input id='vasTelefon' type='text' name='vasTelefon' placeholder='Unesite Vaš broj telefona*'/>
                    <Input id='postanskiBroj' type='text' name='postanskiBroj' placeholder='Poštanski broj*'/>
                    <Input id='mestoStanovanja' type='text' name='mestoStanovanja' placeholder='Mesto stanovanja*'/>
                    <Input id='datumRodjenja' type='text' name='datumRodjenja' placeholder='Dan / Mesec / Godina rodjenja*'/>
                    <Input id='pol' type='text' name='pol' placeholder='Pol*'/>
                </div>
            </div>
            <div className={styles.formBottom}>
                 <label>Iskustvo i stručna sprema</label>
                <div className={styles.formGrid}>
                    <Input id='prijavaRad' name='prijavaRad' type='text' placeholder='Prijava za rad*' />
                    <Input id='iskustvo' name='iskustvo' type='text' placeholder='Iskustvo*' />
                    <Input id='dostupnost' name='dostupnost' type='text' placeholder='Dostupnost*' />
                    <Input id='satiDnevno' name='satiDnevno' type='text' placeholder='Koliko sati dnevno*' />
                </div>
            </div>
        </form>
        <div className={styles.notRobotBox}>
            <div className={styles.reCaptcha}>not robot</div>
            <div className={styles.notRobotText}>
                <p className={styles.p1}>Slanjem aplikacije prihvatate da budete kontaktirani za razgovor sa sa zainteresovanim osobama za traženje pomoći u nezi. Platofrma NEGOVATELJI.RS je namenjena kreiranju zajednice i povezivanju osoba koje pružaju pomoć i onih kojima je ta pomoć neophodna i ne preuzima odgovornost za pregovaranje, ugovaranje niti kvalitet posla koji nudi aplikant niti uslove rada i proces selekcije koji sprovodi i traži zainteresovana strana.</p>
            </div>
        </div>
    </div>)
}