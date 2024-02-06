import SlideComponent from "@/components/common/slideComponent"
import courseService from "@/services/courseService"
import useSWR from "swr"
import styles from '../../../styles/slideCategory.module.scss'

const NewestCategory = () => {
    const { data, error } = useSWR('/newest', courseService.getNewestCourses)

    if (error) return error
    if (!data) {
        return (
            <>
                <p>Loading.....</p>
            </>
        )
    }

    return (
        <>
            <p className={styles.titleCategory}>Lançamentos</p>
            <SlideComponent course={data.data}/>
        </>
    )
}

export default NewestCategory