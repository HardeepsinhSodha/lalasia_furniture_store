import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';
import usePreventBodyScroll from '../../hooks/usePreventBodyScroll';

export default function ProductsList(props) {
    const { children, scrollButtonPostion, onWheelScroll } = props
    const { disableScroll, enableScroll } = usePreventBodyScroll();
    const menu = (
        <ScrollMenu
            onWheel={onWheelScroll && onWheel}
            Footer={scrollButtonPostion === 'bottom' ? <FooterArray/>:null}
            LeftArrow={scrollButtonPostion === 'side' ? LeftArrow : null}
            RightArrow={scrollButtonPostion === 'side' ? RightArrow : null}
        >
            {children}
        </ScrollMenu>
    )
    if(onWheelScroll){
        return <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
            {menu}
        </div>
    }
    return menu
}
const FooterArray = (props) => {
    return (
        <div className='flex justify-center gap-x-3 my-3'>
            <LeftArrow />
            <RightArrow />
        </div>
    )
}
function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);

    return (
        <div
            className='flex items-center'
            disabled={isFirstItemVisible} onClick={() => scrollPrev()}
        >
            <ArrowLeftCircle size={'32px'} />
        </div>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (
        <div
            className='flex items-center'
            disabled={isLastItemVisible} onClick={() => scrollNext()}
        >
            <ArrowRightCircle size={'32px'} />
        </div>
    );
}

export function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}