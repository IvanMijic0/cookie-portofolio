import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";
import { ReactNode, SetStateAction, useRef, useState } from "react";

type BookLayoutProps = {
	pages: ReactNode[];
};

const BookLayout = ( { pages }: BookLayoutProps ) => {
	const bookRef = useRef<any>( null );
	const [currentPage, setCurrentPage] = useState( 0 );

	const handleFlip = ( e: { data: SetStateAction<number> } ) => {
		setCurrentPage( e.data );
	};

	const isFirstPage = currentPage === 0;
	const isLastPage = currentPage === pages.length - 1;

	return (
		<motion.div
			initial={ { opacity: 0, scale: 0.9, y: 50 } }
			animate={ { opacity: 1, scale: 1, y: 0 } }
			transition={ { duration: 0.8, ease: "easeOut" } }
			className="flex justify-center items-center h-screen w-screen bg-[#0e1a26] p-4"
		>
			<HTMLFlipBook
				ref={ bookRef }
				width={ 670 }
				height={ 800 }
				minHeight={ 0 }
				minWidth={ 0 }
				usePortrait={ false }
				maxShadowOpacity={ 0.5 }
				drawShadow
				showCover={ false }
				size="stretch"
				className="shadow-2xl rounded-lg"
				swipeDistance={ 30 }
				flippingTime={ 1000 }
				showPageCorners
				style={ {
					backgroundColor: "#fdfdfd",
					borderRadius: "12px",
				} }
				startPage={ 0 }
				maxWidth={ 0 }
				maxHeight={ 0 }
				startZIndex={ 0 }
				autoSize
				mobileScrollSupport
				clickEventForward
				useMouseEvents
				disableFlipByClick
				onFlip={ handleFlip }
			>
				{ pages.map( ( component, i ) => (
					<div
						key={ i }
						data-density="soft"
						className={ `page relative ${ i === pages.length - 1 ? "pointer-events-none opacity-0" : "" }` }
					>
						<div className="page-content select-text relative">
							{ component }
							{ !isFirstPage && (
								<>
									<div
										className="absolute top-2 left-2 w-64 h-64 cursor-pointer z-20"
										onClick={ ( e ) => {
											e.stopPropagation();
											bookRef.current?.pageFlip().flipPrev( "top" );
										} }
										title="Flip Prev (Top)"
									/>
									<div
										className="absolute bottom-2 left-2 w-64 h-64 cursor-pointer z-20"
										onClick={ ( e ) => {
											e.stopPropagation();
											bookRef.current?.pageFlip().flipPrev( "bottom" );
										} }
										title="Flip Prev (Bottom)"
									/>
								</>
							) }
							{ !isLastPage && (
								<>
									<div
										className="absolute top-2 right-2 w-64 h-64 cursor-pointer z-20"
										onClick={ ( e ) => {
											e.stopPropagation();
											bookRef.current?.pageFlip().flipNext( "top" );
										} }
										title="Flip Next (Top)"
									/>
									<div
										className="absolute bottom-2 right-2 w-64 h-64 cursor-pointer z-20"
										onClick={ ( e ) => {
											e.stopPropagation();
											bookRef.current?.pageFlip().flipNext( "bottom" );
										} }
										title="Flip Next (Bottom)"
									/>
								</>
							) }
						</div>
					</div>
				) ) }
			</HTMLFlipBook>
		</motion.div>
	);
};

export default BookLayout;