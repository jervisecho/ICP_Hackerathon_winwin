import HomeJumbotron from "@container/home/home.jumbotron.tsx";
import useScript from "@helper/useScript.tsx";
import HomeSelect from "@container/home/home.select.tsx";
import HomeItem from "@container/home/home.item.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import {useEffect} from "react";
import {onGetEventAction} from "@action/home.action.tsx";
import {testData} from "@container/home/home.test.tsx";


const HomeContainer = () => {
    useScript("/assets/js/theme.bundle.min.js");
    const dispatch = useDispatch();
    const { events } = useSelector((root: RootState) => root.HomeReducer);

    useEffect(() => {
        dispatch(onGetEventAction.success(testData))
    }, []);

    return (
        <main>
            <HomeJumbotron/>
            <section className="overflow-hidden position-relative">
                <div className="container py-9 py-lg-12 position-relative">
                    <div className="row">
                        <div className="col-lg-12 mb-5 mb-lg-0 mx-auto">
                            <HomeSelect/>
                            <div className="row">
                                {events.map((item) => <HomeItem event={item} key={item.id} />)}
                            </div>
                            <div className="pt-2 text-center" data-aos="fade-up" data-aos-delay="350">
                                <a href="#!" className="btn btn-info rounded-pill">Load More Events</a>
                            </div>
                        </div>
                    </div>
                </div>
                <svg className="position-absolute start-0 bottom-0 flip-y" style={{color: 'var(--bs-dark)'}}
                     width="100%" height="36"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 152" fill="none" preserveAspectRatio="none">
                    <path d="M126.597 138.74C99.8867 127.36 76.6479 109.164 59.2161 85.9798L0 3.05176e-05L1440 0C1440 0 1419.98 25.8404 1380.15 32.9584L211.382 150.811C182.549 154.283 153.308 150.12 126.597 138.74Z" fill="currentColor"/>
                </svg>
            </section>
        </main>
    )
}

export default HomeContainer;