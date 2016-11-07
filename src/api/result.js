/* 
 * PMHC.co Portfolio 2016 
 * Result handler
 */

class Result {

	constructor(data) {
		this.meta = data.meta;
		this.projects = data.projects;
		this.profile = data.profile;
		this.contact = data.contact;
	}

	nomatch() {
		return this.output([]);
	}

	output(res) {
		if (res.constructor !== Array) res = [res];
		return {
			meta: {
				...this.meta
			},
			result: res
		};
	}
 
	getProfile() {
		return this.output([this.profile]);
	}

	getProjectListing() {
		return this.output(
			this.projects.map(({ uid, name, year, type, url, source, desc, tech, color, display }) => ({ uid, name, year, type, url, source, desc, tech, color, display }))
		);
	}

	getProjectCase(selectedId) {
		return this.output(
			this.projects.filter((item) => (item.uid === selectedId)).map(({ overview, components, design }) => ({ overview, components, design }))
		);
	}
}

export default Result;