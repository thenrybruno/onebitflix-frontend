import useSWR from 'swr'
import styles from '../../../styles/slideCategory.module.scss'
import courseService from '@/services/courseService'
import SlideComponent from '@/components/common/slideComponent'

const FeaturedCategory = () => {
    const { data, error } = useSWR('/featured', courseService.getFeaturedCourses)

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
            <p className={styles.titleCategory}>em destaque</p>
            <SlideComponent course={data.data}/>
        </>
    )
}

export default FeaturedCategory