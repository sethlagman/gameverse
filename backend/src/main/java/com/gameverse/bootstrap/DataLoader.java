package com.gameverse.bootstrap;

import com.gameverse.product.Product;
import com.gameverse.product.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {
    @Bean
    CommandLineRunner loadSampleData(ProductRepository products) {
        return args -> {
            if (products.count() > 0) return;

            products.save(product("Elden Ring", "PC", "FromSoftware", 59.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5h.jpg",
                    "A new fantasy action RPG.", "RPG, Action", "2022-02-25"));

            products.save(product("God of War", "PS5", "Santa Monica Studio", 49.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg",
                    "Kratos embarks on a journey with his son.", "Action", "2018-04-20"));

            products.save(product("Forza Horizon 5", "Xbox", "Playground Games", 39.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mjs.jpg",
                    "Open-world racing in Mexico.", "Racing", "2021-11-09"));

            products.save(product("The Legend of Zelda: Tears of the Kingdom", "Switch", "Nintendo", 69.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6b3l.jpg",
                    "Explore the skies and depths of Hyrule.", "Adventure", "2023-05-12"));

            products.save(product("Spider-Man 2", "PS5", "Insomniac Games", 69.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6g5h.jpg",
                    "Peter and Miles face new threats.", "Action", "2023-10-20"));

            products.save(product("Starfield", "PC", "Bethesda", 69.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6j7i.jpg",
                    "Epic space RPG adventure.", "RPG, Sci-Fi", "2023-09-06"));

            products.save(product("Horizon Forbidden West", "PS5", "Guerrilla Games", 49.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2gvu.jpg",
                    "Aloy ventures into the West.", "Action RPG", "2022-02-18"));

            products.save(product("Mario Kart 8 Deluxe", "Switch", "Nintendo", 59.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7b.jpg",
                    "Fast-paced kart racing.", "Racing", "2017-04-28"));

            products.save(product("Gran Turismo 7", "PS5", "Polyphony Digital", 69.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2o2x.jpg",
                    "Real driving simulator.", "Racing, Simulation", "2022-03-04"));

            products.save(product("Cyberpunk 2077", "PC", "CD PROJEKT RED", 29.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6k1r.jpg",
                    "Open-world action RPG in Night City.", "RPG", "2020-12-10"));

            products.save(product("Baldur's Gate 3", "PC", "Larian Studios", 59.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6k9c.jpg",
                    "A next-gen RPG set in the D&D universe.", "RPG", "2023-08-03"));

            products.save(product("FIFA 24", "PS5", "EA Sports", 69.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6l0x.jpg",
                    "Football reimagined.", "Sports", "2024-09-27"));

            products.save(product("NBA 2K25", "Xbox", "2K", 69.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6lqf.jpg",
                    "Basketball simulation.", "Sports", "2025-09-01"));

            products.save(product("Resident Evil 4 Remake", "PS5", "Capcom", 49.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w0b.jpg",
                    "Survival horror classic reborn.", "Horror", "2023-03-24"));

            products.save(product("Animal Crossing: New Horizons", "Switch", "Nintendo", 59.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1n9e.jpg",
                    "Create your island paradise.", "Simulation", "2020-03-20"));

            products.save(product("Call of Duty: Modern Warfare III", "PC", "Activision", 69.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6m0d.jpg",
                    "Fast-paced shooter action.", "Shooter", "2023-11-10"));

            products.save(product("Minecraft", "PC", "Mojang", 26.95,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.jpg",
                    "Survive and build in a blocky world.", "Sandbox", "2011-11-18"));

            products.save(product("Fortnite", "PC", "Epic Games", 0.00,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mjs.jpg",
                    "Battle royale phenomenon.", "Shooter", "2017-07-21"));

            products.save(product("The Witcher 3: Wild Hunt", "PC", "CD PROJEKT RED", 19.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
                    "Story-driven open world RPG.", "RPG", "2015-05-19"));

            products.save(product("Overwatch 2", "PC", "Blizzard", 0.00,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6m3a.jpg",
                    "Team-based hero shooter.", "Shooter", "2022-10-04"));

            products.save(product("Apex Legends", "PC", "Respawn", 0.00,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1qkv.jpg",
                    "Squad-based battle royale.", "Shooter", "2019-02-04"));

            // Additional bulk entries
            products.save(product("Assassin's Creed Valhalla", "PC", "Ubisoft", 29.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jv2.jpg",
                    "Viking saga in England.", "Action RPG", "2020-11-10"));
            products.save(product("Ghost of Tsushima", "PS5", "Sucker Punch", 49.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2m9k.jpg",
                    "Samurai open-world adventure.", "Action", "2020-07-17"));
            products.save(product("Death Stranding", "PC", "Kojima Productions", 19.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1u6f.jpg",
                    "A journey to reconnect America.", "Adventure", "2020-07-14"));
            products.save(product("Diablo IV", "PC", "Blizzard", 69.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6m6q.jpg",
                    "Return to Sanctuary.", "Action RPG", "2023-06-06"));
            products.save(product("Star Wars Jedi: Survivor", "PC", "Respawn", 59.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6e7v.jpg",
                    "Cal Kestis continues his journey.", "Action", "2023-04-28"));
            products.save(product("Returnal", "PS5", "Housemarque", 39.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mya.jpg",
                    "Roguelike bullet-hell.", "Shooter", "2021-04-30"));
            products.save(product("Ratchet & Clank: Rift Apart", "PS5", "Insomniac Games", 49.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2tw9.jpg",
                    "Dimension-hopping adventure.", "Action", "2021-06-11"));
            products.save(product("Metroid Dread", "Switch", "Nintendo", 59.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co4m3i.jpg",
                    "Samus returns in a new 2D adventure.", "Action", "2021-10-08"));
            products.save(product("Splatoon 3", "Switch", "Nintendo", 59.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co5t7l.jpg",
                    "Ink-splatting fun.", "Shooter", "2022-09-09"));
            products.save(product("Forza Motorsport", "Xbox", "Turn 10 Studios", 69.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6h5s.jpg",
                    "Simulation racing perfected.", "Racing", "2023-10-10"));
            products.save(product("Granblue Fantasy: Relink", "PS5", "Cygames", 59.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6kq8.jpg",
                    "Action RPG in a skyfaring world.", "RPG", "2024-02-01"));
            products.save(product("Persona 5 Royal", "PC", "ATLUS", 39.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co5z8t.jpg",
                    "Phantom Thieves edition.", "JRPG", "2022-10-21"));
            products.save(product("Like a Dragon: Infinite Wealth", "PC", "Ryu Ga Gotoku Studio", 69.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6o1x.jpg",
                    "New saga in Hawaii.", "RPG", "2024-01-26"));
            products.save(product("Street Fighter 6", "PC", "Capcom", 59.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6k1a.jpg",
                    "The next evolution of fighting.", "Fighting", "2023-06-02"));
            products.save(product("Tekken 8", "PC", "Bandai Namco", 69.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6k8o.jpg",
                    "Heihachi’s legacy continues.", "Fighting", "2024-01-26"));
            products.save(product("The Last of Us Part I", "PC", "Naughty Dog", 49.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co5b3c.jpg",
                    "Remake of a masterpiece.", "Action", "2023-03-28"));
            products.save(product("The Last of Us Part II", "PS5", "Naughty Dog", 39.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co4n1q.jpg",
                    "Ellie’s brutal journey.", "Action", "2020-06-19"));
            products.save(product("Hades", "PC", "Supergiant Games", 12.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2n9o.jpg",
                    "Battle out of hell.", "Rogue-lite", "2020-09-17"));
            products.save(product("Hades II", "PC", "Supergiant Games", 29.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6p1j.jpg",
                    "Return to the underworld.", "Rogue-lite", "2025-06-01"));
            products.save(product("Cuphead", "PC", "Studio MDHR", 9.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1z1a.jpg",
                    "Run-and-gun classic.", "Platformer", "2017-09-29"));
            products.save(product("Ori and the Will of the Wisps", "Xbox", "Moon Studios", 14.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2g1m.jpg",
                    "A beautiful metroidvania.", "Platformer", "2020-03-11"));
            products.save(product("Sea of Stars", "PC", "Sabotage Studio", 34.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6g7u.jpg",
                    "Turn-based retro-inspired JRPG.", "JRPG", "2023-08-29"));
            products.save(product("Alan Wake II", "PC", "Remedy", 49.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6k6m.jpg",
                    "Survival horror thriller.", "Horror", "2023-10-27"));
            products.save(product("Remnant II", "PC", "Gunfire Games", 49.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6e3h.jpg",
                    "Co-op soulslike shooter.", "Shooter", "2023-07-25"));
            products.save(product("Palworld", "PC", "Pocketpair", 29.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6o2y.jpg",
                    "Creature-collecting survival.", "Survival", "2024-01-19"));
            products.save(product("Helldivers 2", "PC", "Arrowhead", 39.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6n2n.jpg",
                    "Co-op galactic war.", "Shooter", "2024-02-08"));
            products.save(product("Sifu", "PC", "Sloclap", 19.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2t3z.jpg",
                    "Kung fu revenge tale.", "Action", "2022-02-08"));
            products.save(product("It Takes Two", "PC", "Hazelight", 19.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2tx2.jpg",
                    "Co-op adventure.", "Adventure", "2021-03-26"));
            products.save(product("Elden Ring: Shadow of the Erdtree", "PC", "FromSoftware", 39.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6p3p.jpg",
                    "Massive expansion.", "RPG", "2024-06-21"));
            products.save(product("No Man's Sky", "PC", "Hello Games", 29.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7c.jpg",
                    "Infinite exploration.", "Adventure", "2016-08-12"));
            products.save(product("Destiny 2: The Final Shape", "PC", "Bungie", 49.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6p2z.jpg",
                    "Conclusion to Light & Dark saga.", "Shooter", "2024-06-04"));
            products.save(product("God of War Ragnarök", "PS5", "Santa Monica Studio", 49.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co5b4k.jpg",
                    "The saga continues.", "Action", "2022-11-09"));
            products.save(product("Spider-Man: Miles Morales", "PS5", "Insomniac Games", 39.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmt.jpg",
                    "Miles’ solo adventure.", "Action", "2020-11-12"));
            products.save(product("Detroit: Become Human", "PC", "Quantic Dream", 14.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1t9k.jpg",
                    "Choices matter.", "Adventure", "2019-06-18"));
            products.save(product("Gears 5", "Xbox", "The Coalition", 14.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x9m.jpg",
                    "Kait’s journey.", "Shooter", "2019-09-10"));
            products.save(product("Halo Infinite", "Xbox", "343 Industries", 0.00,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co4m2y.jpg",
                    "Master Chief returns.", "Shooter", "2021-12-08"));
            products.save(product("Yakuza: Like a Dragon", "PC", "Ryu Ga Gotoku Studio", 19.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1w2p.jpg",
                    "Ichiban’s rise.", "JRPG", "2020-11-10"));
            products.save(product("Monster Hunter: World", "PC", "Capcom", 19.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2h9n.jpg",
                    "Hunt massive beasts.", "Action", "2018-01-26"));
            products.save(product("Monster Hunter Rise", "PC", "Capcom", 29.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co3o2q.jpg",
                    "Rise to the challenge.", "Action", "2022-01-12"));
            products.save(product("NieR:Automata", "PC", "PlatinumGames", 14.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1t3x.jpg",
                    "Glory to mankind.", "Action RPG", "2017-03-17"));
            products.save(product("Hollow Knight", "PC", "Team Cherry", 9.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7g.jpg",
                    "Descend into Hallownest.", "Metroidvania", "2017-02-24"));
            products.save(product("Sonic Superstars", "PC", "SEGA", 39.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6k4n.jpg",
                    "Classic Sonic reborn.", "Platformer", "2023-10-17"));
            products.save(product("Mario Wonder", "Switch", "Nintendo", 59.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6k0m.jpg",
                    "A new 2D Mario.", "Platformer", "2023-10-20"));
            products.save(product("Xenoblade Chronicles 3", "Switch", "Monolith Soft", 59.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s0a.jpg",
                    "Epic JRPG journey.", "JRPG", "2022-07-29"));
            products.save(product("Metaphor: ReFantazio", "PC", "ATLUS", 69.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6p4x.jpg",
                    "A new fantasy RPG.", "JRPG", "2024-10-11"));
            products.save(product("Bioshock Infinite", "PC", "Irrational Games", 7.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x1p.jpg",
                    "In the sky-city of Columbia.", "Shooter", "2013-03-26"));
            products.save(product("Mass Effect Legendary Edition", "PC", "BioWare", 19.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2m6c.jpg",
                    "Remastered trilogy.", "RPG", "2021-05-14"));
            products.save(product("Red Dead Redemption 2", "PC", "Rockstar Games", 29.99,
                    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7e.jpg",
                    "Outlaw epic.", "Action", "2018-10-26"));
        };
    }

    private static Product product(String title, String platform, String publisher, double price,
                                   String thumb, String description, String genre, String releaseDate) {
        Product p = new Product();
        p.setTitle(title);
        p.setPlatform(platform);
        p.setPublisher(publisher);
        p.setPrice(price);
        p.setThumbnailUrl(thumb);
        p.setDescription(description);
        p.setGenre(genre);
        p.setReleaseDate(releaseDate);
        return p;
    }
}


