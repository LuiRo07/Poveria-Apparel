function BottomNav() {
    return (
        <div className="bottom-header py-4 flex justify-center items-center border-b-2">
          <ul className="flex justify-center gap-10">
            <li><a className="hover:text-slate-600" href="#">HOME</a></li>
            <li><a className="hover:text-slate-600" href="#">COLLECTION</a></li>
            <li><a className="hover:text-slate-600" href="#">FEATURES</a></li>
            <li><a className="hover:text-slate-600" href="#">HANDBAG</a></li>
            <li><a className="hover:text-slate-600" href="#">VINTAGE</a></li>
            <li><a className="hover:text-slate-600" href="#">CASUAL</a></li>
            <li><a className="hover:text-slate-600" href="#">BLOGS</a></li>
          </ul>
        </div>
    )
}

export default BottomNav;