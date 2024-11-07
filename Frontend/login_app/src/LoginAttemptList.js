import React, { useEffect, useState } from "react";
import "./LoginAttemptList.css";

const LoginAttempt = (props) => <li {...props}>{props.children}</li>;

const LoginAttemptList = (props) => {
	const [filter, setFilter] = useState('');
	const [filteredList, setFilteredList] = useState([]);

	useEffect(() => {
		setFilteredList(props.attempts.filter(attempt => attempt.login.includes(filter) || attempt.password.includes(filter)));
	}, [filter, props.attempts]);

	return (
		<div className="Attempt-List-Main">
			<p>Recent activity</p>
			<input value={filter} onChange={(e) => setFilter(e.target.value)} type="input" placeholder="Filter..." />
			<ul className="Attempt-List">
				{filteredList.map((attempt, i) =>
					<LoginAttempt key={i}>["{attempt.login}", "{attempt.password}"]</LoginAttempt>
				)}
			</ul>
		</div>
	);
}

export default LoginAttemptList;