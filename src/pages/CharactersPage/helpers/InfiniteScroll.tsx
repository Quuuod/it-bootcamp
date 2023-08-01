import { useEffect, useState } from 'react';
import { useCharactersStore } from '../../../shared/store/app';

export const InfiniteScroll = () => {
	const { next } = useCharactersStore((state) => state.info);
	const fetchCharacters = useCharactersStore((state) => state.fetchCharacters);

	const [fetching, setFetcing] = useState(true);

	useEffect(() => {
		if (fetching) fetchCharacters(next);
		setFetcing(false);
	}, [fetching]);

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);
		return () => document.removeEventListener('scroll', scrollHandler);
	}, []);

	const scrollHandler = (e: any) => {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
			300
		) {
			setFetcing(true);
		}
	};
	return <></>;
};
