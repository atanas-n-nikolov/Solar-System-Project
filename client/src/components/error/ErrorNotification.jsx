import { useTranslation } from "react-i18next";

export default function ErrorNotification({ error }) {
    const { t } = useTranslation();

    return (
        <div className="bg-red-500 rounded-[0.3em]  absolute !mt-[1em] right-[1em] !p-[1.5em] !pt-[1em] !pb-[1em] max-w-[300px]">
            <p className="text-white">{t(error)}</p>
        </div>
    )
}