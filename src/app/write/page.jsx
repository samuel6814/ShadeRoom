"use client"

import { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import Image from "next/image";
import styles from "./writePage.module.css";

// Dynamically import ReactQuill to ensure it's only rendered on the client-side
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    useEffect(() => {
        // Ensure that the code inside useEffect only runs on the client-side
        if (typeof window !== "undefined") {
            // Any client-side specific initialization code can go here
        }
    }, []);

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} />
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="" width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src="/image.png" alt="" width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="" width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt="" width={16} height={16} />
                        </button>
                    </div>
                )}
                <ReactQuill
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder="Tell your story..."
                />
            </div>
            <div className={styles.publish}>Publish</div>
        </div>
    );
};

export default WritePage;
