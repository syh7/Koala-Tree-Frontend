import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class GoodreadsService {

    private key = environment.goodreads.key;
    private url = environment.goodreads.url;

    constructor(private http: HttpClient) {
    }

    public getOAuthToken(): Observable<string> {
        return this.http.get<string>(this.url + "/api/auth_user");
    }

    //     URL: https://www.goodreads.com/review/list?v=2    (sample url)
    // HTTP method: GET
    // Parameters:
    // v: 2
    // id: Goodreads id of the user
    // shelf: read, currently-reading, to-read, etc. (optional)
    // sort: title, author, cover, rating, year_pub, date_pub, date_pub_edition, date_started, date_read, date_updated, date_added, recommender, avg_rating, num_ratings, review, read_count, votes, random, comments, notes, isbn, isbn13, asin, num_pages, format, position, shelves, owned, date_purchased, purchase_location, condition (optional)
    // search[query]: query text to match against member's books (optional)
    // order: a, d (optional)
    // page: 1-N (optional)
    // per_page: 1-200 (optional)
    // key: Developer key (required).

    public getReadBooks(userid: string): any {
        return this.http.get(this.url + "/review/list/", {
            params: {
                "id": userid,
                "shelf": "read",
                "sort": "date_read",
                "order": "d"
            }
        });
    }

}