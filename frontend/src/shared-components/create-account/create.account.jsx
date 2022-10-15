import styles from './create.account.module.scss'

import { Input, LongButton } from 'shared-components'

export const CreateAccount = ({stepNumber}) => {
    return (<div className={styles.createAccount}>
        <div className={styles.createAccountHeader}>
            <h4 className={styles.h4}>Napravi profil</h4>
        </div>
        <div className={styles.createAccountBody}>
            <div className={styles.steps}>
                <span className={styles.p1}>1</span>
                <hr className={styles.dottedLine} />
                <span className={styles.p1}>2</span>
                <hr className={styles.dottedLine} />
                <span className={styles.p1}>3</span>
            </div>
            <p className={styles.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptas animi distinctio est sunt. Saepe earum id corporis vero voluptatum.</p>
        <Input id='tipProfila' name='tipProfila' type='text' placeholder='Tip profila*' hasError={false}  />
        </div>
        <div className={styles.createAccountFooter}>
            <LongButton value='Sledeći korak' type='button' />
        </div>
    </div>)
}