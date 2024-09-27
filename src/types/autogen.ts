export interface C_meta {
	title?: string,
	description?: string,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_findAVerifiedPro {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface Dm_directoryChildren {
	slug?: string,
	name?: string,
	address?: Address,
	addressHidden?: boolean,
	headshot?: Image,
	mainPhone?: any,
	c_taxProName?: string,
	googlePlaceId?: string,
	c_tagline?: string,
	dm_baseEntityCount?: string,
	dm_directoryChildren?: any,
}

export interface Dm_directoryParents_directory {
	slug?: string,
	name?: string,
}

export interface DirectoryCity {
	id: string,
	uid: string,
	name: string,
	slug: string,
	c_meta: C_meta,
	c_heroTitle: string,
	c_heroDescription: string,
	c_findAVerifiedPro: C_findAVerifiedPro,
	c_findAVerifiedProHeroText: string,
	c_directoryHeroImage: Image,
	c_onrampCTAURL: string,
	dm_directoryChildren: Dm_directoryChildren[],
	dm_directoryParents_directory: Dm_directoryParents_directory[],
}

export interface Dm_directoryChildren_1 {
	slug?: string,
	name?: string,
	dm_baseEntityCount?: string,
	dm_directoryChildren?: any,
}

export interface DirectoryRegion {
	id: string,
	uid: string,
	name: string,
	slug: string,
	c_meta: C_meta,
	c_heroTitle: string,
	c_heroDescription: string,
	c_findAVerifiedPro: C_findAVerifiedPro,
	c_findAVerifiedProHeroText: string,
	c_directoryHeroImage: Image,
	c_onrampCTAURL: string,
	dm_directoryChildren: Dm_directoryChildren_1[],
	dm_directoryParents_directory: Dm_directoryParents_directory[],
}

export interface Dm_directoryChildren_2 {
	slug?: string,
	name?: string,
	dm_baseEntityCount?: string,
	dm_directoryChildren?: any,
}

export interface DirectoryRoot {
	id: string,
	uid: string,
	name: string,
	slug: string,
	c_meta: C_meta,
	c_heroTitle: string,
	c_heroDescription: string,
	c_findAVerifiedPro: C_findAVerifiedPro,
	c_findAVerifiedProHeroText: string,
	c_directoryHeroImage: Image,
	c_onrampCTAURL: string,
	dm_directoryChildren: Dm_directoryChildren_2[],
	dm_directoryParents_directory: Dm_directoryParents_directory[],
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface Interval {
	start: any,
	end: any,
}

export interface DayHour {
	openIntervals?: Interval[],
	isClosed?: boolean,
}

export interface HolidayHours {
	date: string,
	openIntervals?: Interval[],
	isClosed?: boolean,
	isRegularHours?: boolean,
}

export interface Hours {
	monday?: DayHour,
	tuesday?: DayHour,
	wednesday?: DayHour,
	thursday?: DayHour,
	friday?: DayHour,
	saturday?: DayHour,
	sunday?: DayHour,
	holidayHours?: HolidayHours[],
	reopenDate?: string,
}

export interface TaxProsMain {
	description: string,
	address: Address,
	addressHidden: boolean,
	slug: string,
	geocodedCoordinate: Coordinate,
	headshot: Image,
	services: string[],
	c_advisorBio: string,
	c_uRLName: string,
	hours: Hours,
	c_areasOfExpertise: string[],
	c_metaDescription: string,
	c_title: string,
	c_metaKeywords: string,
	c_taxProName: string,
	c_officeLocationName: string,
	certifications: string[],
	yearsOfExperience: number,
	languages: string[],
	c_jotFormId: string,
	googlePlaceId: string,
	c_signedMapUrlPreProd: string,
	c_signedMapUrlProd: string,
	id: string,
	labels: any,
	c_pseudonymID: string,
	c_acceptingNewClients: boolean,
	mainPhone: any,
	twitterHandle: string,
	facebookPageUrl: string,
	instagramHandle: string,
	linkedInUrl: string,
	pinterestUrl: string,
	tikTokUrl: string,
	youTubeChannelUrl: string,
	c_tagline: string,
	c_epsImageUrl: string,
	c_allowsMeetInPerson: boolean,
	c_allowsMeetVirtually: boolean,
	c_personalWebsiteUrl: string,
}

export interface TaxProsPreview {
	description: string,
	address: Address,
	addressHidden: boolean,
	slug: string,
	geocodedCoordinate: Coordinate,
	headshot: Image,
	services: string[],
	c_advisorBio: string,
	c_uRLName: string,
	hours: Hours,
	c_areasOfExpertise: string[],
	c_metaDescription: string,
	c_title: string,
	c_metaKeywords: string,
	c_taxProName: string,
	c_officeLocationName: string,
	certifications: string[],
	yearsOfExperience: number,
	languages: string[],
	c_jotFormId: string,
	googlePlaceId: string,
	c_signedMapUrlPreProd: string,
	c_signedMapUrlProd: string,
	id: string,
	labels: any,
	c_pseudonymID: string,
	c_acceptingNewClients: boolean,
	mainPhone: any,
	twitterHandle: string,
	facebookPageUrl: string,
	instagramHandle: string,
	linkedInUrl: string,
	pinterestUrl: string,
	tikTokUrl: string,
	youTubeChannelUrl: string,
	c_tagline: string,
	c_epsImageUrl: string,
	c_allowsMeetInPerson: boolean,
	c_allowsMeetVirtually: boolean,
	c_personalWebsiteUrl: string,
}

export interface TaxProsReferred {
	description: string,
	address: Address,
	addressHidden: boolean,
	slug: string,
	geocodedCoordinate: Coordinate,
	headshot: Image,
	services: string[],
	c_advisorBio: string,
	c_uRLName: string,
	hours: Hours,
	c_areasOfExpertise: string[],
	c_metaDescription: string,
	c_title: string,
	c_metaKeywords: string,
	c_taxProName: string,
	c_officeLocationName: string,
	certifications: string[],
	yearsOfExperience: number,
	languages: string[],
	c_jotFormId: string,
	googlePlaceId: string,
	c_signedMapUrlPreProd: string,
	c_signedMapUrlProd: string,
	id: string,
	labels: any,
	c_pseudonymID: string,
	c_acceptingNewClients: boolean,
	mainPhone: any,
	twitterHandle: string,
	facebookPageUrl: string,
	instagramHandle: string,
	linkedInUrl: string,
	pinterestUrl: string,
	tikTokUrl: string,
	youTubeChannelUrl: string,
	c_tagline: string,
	c_epsImageUrl: string,
	c_allowsMeetInPerson: boolean,
	c_allowsMeetVirtually: boolean,
	c_personalWebsiteUrl: string,
}
