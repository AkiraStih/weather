export function SideBar() {
  return (
    <aside className="flex w-16 flex-col items-center gap-6 bg-[#1E1E1E] py-6">
      <IconBtn active />
      <IconBtn />
      <IconBtn />
      <IconBtn />
    </aside>
  );
}

function IconBtn({ active = false }: { active?: boolean }) {
  return (
    <div
      className={`h-9 w-9 rounded-xl ${active ? "bg-white/10" : "bg-transparent"}`}
    />
  );
}