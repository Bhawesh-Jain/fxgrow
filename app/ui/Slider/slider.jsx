import Marquee from "./Marquee";
import SliderItem from "./sliderItem";

export default function Slider() {
    return (
        <div className="w-full">
            <Marquee speed={60}>
                <SliderItem />
                <SliderItem />
                <SliderItem />
                <SliderItem />
                <SliderItem />
                <SliderItem />
                <SliderItem />
                <SliderItem />
                <SliderItem />
                <SliderItem />
                <SliderItem />
            </Marquee>
        </div>
    );
}