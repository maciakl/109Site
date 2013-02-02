IS_WINDOWS = (RUBY_PLATFORM =~ /mingw/i) ? true : false

task :build do
    target = "dist"
    remove_dir(target) if Dir.exists?(target)
    mkdir(target)
    cp_r "components", target
    files = FileList["*.html", "*.JPG", "*.png", "*.txt", "*.ico"]
    
    files.each do |f|
        cp f, target
    end
end

task :deploy => [:build] do
    target = IS_WINDOWS ? "x:/" : "/remote/msuweb/"
 
    puts "Deploying site....."
    cp_r "dist/components", target
    FileList["dist/*.*"].each do |f|
        cp f, target
    end
end

task :default => [:build]

