import { inject, Injectable, OnInit, signal } from "@angular/core";
import { LineProfileDto } from "../models/LineProfileDto.model";
import liff from "@line/liff";
import { environment } from "../../environment/environment";

@Injectable({
    providedIn: "root",
})

export class LiffService implements OnInit {
    readonly isReady = signal(false);
    readonly profile = signal<LineProfileDto | null>(null);

    ngOnInit(): void {

    }

    async getLiff(): Promise<void> {
        await liff.init({ liffId: environment.liffId });
        this.isReady.set(true);

        if (liff.isLoggedIn()) {
            const p = await liff.getProfile();
            this.profile.set(p);
        } else {
            liff.login();
        }

        this.checkIO();
    }

    checkIO() {
        switch (liff.getOS()) {
            case "android": document.body.style.backgroundColor = "#d1f5d3"; break
            case "ios": document.body.style.backgroundColor = "#eeeeee"; break
        }
    }

    GetAccessToken(): string {
        return liff.getAccessToken() ?? "";
    }

    logout(): void {
        liff.logout();
        this.profile.set(null);
    }
}