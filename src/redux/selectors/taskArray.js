export class TaskArray {
	constructor(array) {
		this.array = array;
	}

	flatArray(date) {
		this.array = this.array
			.filter((e) => e.day === date.day && e.month === date.month && e.year === date.year)
			.map((t) => t.tasks)
			.flat();
		return this;
	}

	setOffsetX() {
		this.array = this.array.map((a, index) => ({
			...a,
			offsetX: this.array
				.slice(0, index)
				.filter(
					(e) =>
						(e.start > a.start && e.start < a.end) ||
						(e.end > a.start && e.end < a.end) ||
						(e.start < a.start && e.end > a.end)
				).length,
		}));
		return this;
	}

	setOffsetY() {
		this.array = this.array.map((t) => ({ ...t, offsetY: (t.start - 8) * 80 }));
		return this;
	}

	setDuration() {
		this.array = this.array.map((t) => ({ ...t, duration: (t.end - t.start) * 80 }));
		return this;
	}

	get() {
	    return this.array;
    }
}
