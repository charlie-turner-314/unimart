create table "public"."textbooks" (
    "id" uuid not null default uuid_generate_v4(),
    "seller" uuid,
    "created_at" timestamp with time zone not null default now(),
    "title" text,
    "description" text,
    "price" real
);


alter table "public"."textbooks" add constraint "textbooks_seller_fkey" FOREIGN KEY (seller) REFERENCES auth.users(id) ON UPDATE CASCADE not valid;

alter table "public"."textbooks" validate constraint "textbooks_seller_fkey";

grant delete on table "public"."textbooks" to "anon";

grant insert on table "public"."textbooks" to "anon";

grant references on table "public"."textbooks" to "anon";

grant select on table "public"."textbooks" to "anon";

grant trigger on table "public"."textbooks" to "anon";

grant truncate on table "public"."textbooks" to "anon";

grant update on table "public"."textbooks" to "anon";

grant delete on table "public"."textbooks" to "authenticated";

grant insert on table "public"."textbooks" to "authenticated";

grant references on table "public"."textbooks" to "authenticated";

grant select on table "public"."textbooks" to "authenticated";

grant trigger on table "public"."textbooks" to "authenticated";

grant truncate on table "public"."textbooks" to "authenticated";

grant update on table "public"."textbooks" to "authenticated";

grant delete on table "public"."textbooks" to "service_role";

grant insert on table "public"."textbooks" to "service_role";

grant references on table "public"."textbooks" to "service_role";

grant select on table "public"."textbooks" to "service_role";

grant trigger on table "public"."textbooks" to "service_role";

grant truncate on table "public"."textbooks" to "service_role";

grant update on table "public"."textbooks" to "service_role";


