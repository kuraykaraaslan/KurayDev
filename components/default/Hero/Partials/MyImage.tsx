//i18n
import { withTranslation } from 'react-i18next';
import i18n from '@/libs/localize/localize';

const MyImage = () => {

    const { t } = i18n;

    return (
        <div className="relative flex-none hidden sm:block group">
            <div className="shadow-2xl max-w-24 sm:max-w-48 md:max-w-64 bg-[#F5F5DC] transition duration-500 transform group-hover:rotate-y-180">
                <img src="/assests/img/kuraykaraaslan_1.jpg" alt="kuray karaaslan" className="transition duration-500 transform group-hover:opacity-0" />
            </div>
            <div className="text-black absolute top-0 left-0 w-full h-full bg-opacity-100 rounded-lg flex justify-center items-center opacity-0 transition duration-500 group-hover:opacity-100 flex-col">
                <div className="absolute bottom-10 right-3 items-center opacity-0 group-hover:opacity-100 transition duration-500 rotate-y-180 group-hover:rotate-y-0 align-middle text-center">
                    <p className="font-caveat-300 -rotate-45">{t('HIRE_ME.IZMIR_KARACA_CINEMA')}</p>
                    <p className="font-caveat-300 -rotate-45">{t('HIRE_ME.10TH_DECEMBER_2023')}</p>
                    {/*<p className="font-caveat-700 ml-10 -rotate-45">taken by my &#10084;</p>*/}
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(MyImage);
