'use client';
import { MobileMenu } from "../../MobileMenu/MobileMenu";

const MobileView = () => {
    return (
        <nav className={`${styles.position} ${styles.borders}`}>
            <div className={`${styles.contentAlignment}`}>
                <div className={`${styles.brandFont}`}>
                    ScrKpr
                </div>
                <MobileMenu/>
            </div>
        </nav>
    )
};

export { MobileView };

    const styles = {
        position: "relative top-0 z-50",
        contentAlignment: "flex justify-between items-center px-3 py-1",
        borders: "",
        brandFont: "text-3xl font-bold text-gray-700",
    };